<?php

namespace App\Http\Controllers;

use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;
use Illuminate\Http\Request;
use App\Models\Produto;
use Google\Service\Sheets\ClearValuesRequest;
use Google\Service\Sheets\Resource\Spreadsheets;
use Google\Service\Sheets\Spreadsheet;
use App\Models\Presenca;
use Illuminate\Support\Facades\DB;

use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;
use Google\Service\Calendar;

use Illuminate\Support\Arr;



require '../vendor/autoload.php';


class GoogleSheetsController extends Controller {

public function getCalendar($id){


    if ($id != 78945) return null;

// Get the API client and construct the service object.
$client = new Client();

$client->setApplicationName('Google Calendar API PHP Quickstart');
$client->setScopes(Calendar::CALENDAR_READONLY);
$client->setAuthConfig(storage_path('credentials_calendar.json'));
$client->setAccessType('offline');
$client->setPrompt('select_account consent');

$service = new Calendar($client);
    $tokenPath = storage_path('token.json');

        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    

// Print the next 10 events on the user's calendar.
$calendarId = 'esdomingosrebelo.net_838fqb6sdht2sqlmgrvht8c5go@group.calendar.google.com';
$optParams = array(
  'orderBy' => 'startTime',
  'singleEvents' => true,
  'timeMin' => date('c'),
  'timeMax' => date('c', strtotime('+23 hours'))
);
$results = $service->events->listEvents($calendarId, $optParams);
$events = $results->getItems();

if (empty($events)) {
    print "No upcoming events found.\n";
} else {
    print "Upcoming events:\n";
    foreach ($events as $event) {
        $start = $event->start->dateTime;
        if (empty($start)) {
            $start = $event->start->date;
        }
        //printf("%s (%s)\n", $event->getLocation(), $start);

      

        $items[] = (['location' => $event->getLocation(), 'summary' => $event->getSummary(), 'start' => $event->getStart()->getDateTime(), 'end' => $event->getEnd()->getDateTime(), 'chaveunica' => $event->getId(), 'professor' => $event->getDescription(), 'piso' => $event->getOrganizer()->getDisplayName()]);
        
       

    }
    DB::table('presencas')->insert($items);
}


return $items;


}





public function readSheet(){

    $client = new Client();
    $client->setApplicationName('Google Sheets API PHP Quickstart');
    $client->setScopes(Sheets::SPREADSHEETS);
    $client->setAuthConfig(storage_path('credentials.json'));
    $client->setAccessType('offline');
$service = new Sheets($client);

$spreadsheetId = '1QxSrgid2YcWLxu6BRSs8BCVQQ3Mivzotw_r4vq-36PI';
$range = 'folhaapp!A:A';
$response = $service->spreadsheets_values->get($spreadsheetId, $range);


return response()->json($response->getValues());

}


public function saveDataToSheet()
{

    $produtos = DB::table('presencas')->where('faltou', '1')->where('piso', 'a3')->get();




    $client = $this->getClient();
    $service = new Sheets($client);

    $spreadsheetId = '1QxSrgid2YcWLxu6BRSs8BCVQQ3Mivzotw_r4vq-36PI';
    $range = 'folhaapp!A:D';


    if($produtos->count() === 0){
        return true;
    }

    $finalData = collect();
    foreach($produtos as $produto){
        $finalData->push([
            $produto->professor,
            $produto->start,
            $produto->end


        ]);
    }


    $body = new ValueRange([
        'values' => $finalData
    ]);

     $bodyClear = new ClearValuesRequest;

    $params = [
        'valueInputOption' => 'RAW',
    ];


    $result = $service->spreadsheets_values->append($spreadsheetId, $range,
    $body, $params);




    return $finalData;
}

}