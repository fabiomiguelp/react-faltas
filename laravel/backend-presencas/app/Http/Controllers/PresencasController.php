<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Presenca;
use Illuminate\Support\Facades\DB;

class PresencasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($piso)
    {
        return DB::table('presencas')->where('faltou', '0')->where('piso', $piso)->get();
    }

    /**
     * Store a newly created resource in storaga.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $presenca = Presenca::find($id);
        $presenca->update($request->all());
        return $presenca;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
