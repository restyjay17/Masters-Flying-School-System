<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_admin_login()
    {
        $response = $this->call('POST', '/api/auth/admin', [
            'uname' => 'admin',
            'pword' => 'admin'
        ]);

        $response->assertStatus(200);
    }


    public function test_admin_logout()
    {
        $response = $this->call('POST', '/api/auth/admin/logout');

        $response->assertStatus(200);
    }


    public function test_admin_session_check()
    {
        $response = $this->call('GET', '/api/auth/admin/check');

        $response->assertStatus(200);
    }
}
