<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use WithoutMiddleware;
use Mockery\MockInterface;


class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example(){
        $this->withoutMiddleware();

        $response = $this->postJson('http://127.0.0.1:8000/api/tasks', ['name' => 'eded','details' => 'ferferf']);
    
        $response
            ->assertStatus(200)
            ->assertJsonFragment([
                       'data' => [
                           'id'  => 25,
                           'name' => "eded",
                           'details'  => "ferferf",
                           'created_at'      => "25/05/2022",
                           'updated_at' => "25/05/2022"
                       ],
                       "message"=>"Task created!",
                    "success"=>true


               ]);
    //     ->SeeJson([
    //         'success'=>['true'],
    //            'data' => [
    //                'id'  => 2,
    //                'name' => "eded",
    //                'details'  => "ferferf",
    //                'created_at'      => "25/05/2022",
    //                'updated_at' => "25/05/2022"
    //            ]
    //    ]);


    }
}
