<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_add_student()
    {
        $response = $this->call('POST', '/api/priv/student', [
            'studentid' => 'abc123',
            'lname' => 'Doe',
            'fname' => 'Jane',
            'mname' => 'Lorem',
            'email' => 'jane.doe@email.com',
            'status' => 0,
            'type' => 1
        ]);

        $response->assertStatus(200);
    }

    
    public function test_get_students()
    {
        $response = $this->call('GET', '/api/priv/students?page=1', [
            'search' => '',
            'status' => ''
        ]);

        $response->assertStatus(200);
    }


    public function test_send_student_verification()
    {
        $response = $this->call('POST', '/api/priv/students/send_verification', [
            'students' => '1,2'
        ]);

        $response->assertStatus(200);
    }


    public function test_get_admins()
    {
        $response = $this->call('GET', '/api/priv/admins?page=1', [
            'search' => ''
        ]);

        $response->assertStatus(200);
    }


    public function test_add_admin()
    {
        $response = $this->call('POST', '/api/priv/admin', [
            'uname' => 'admin',
            'pword' => 'admin',
            'name' => 'Jane Doe',
            'email' => 'jane.doe@email.com'
        ]);

        $response->assertStatus(200);
    }
}
