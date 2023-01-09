<?php

if (!isset($_POST["type"])) {
    echo json_encode([
        "message" => "Error type",
        "status" => 404
    ]);
    return;
}

$type = $_POST["type"];

switch ($type) {

    case "nickname":
        $data = [
            "John",
            "Mary",
            "Peter",
            "Sally",
            "Alex",
            "Tefy",
            "Garry",
            "Allen",
            "Henry",
            "Smith",
            "Ivan",
            "Tony",
            "David",
        ];

        echo json_encode($data);
        break;
    case "news":
        $data = [
            ["title"=>"title 1","body"=>"news body 1"],
            ["title"=>"title 2","body"=>"news body 2"],
            ["title"=>"title 3","body"=>"news body 3"],
            ["title"=>"title 4","body"=>"news body 4"],
            ["title"=>"title 5","body"=>"news body 5"],
            ["title"=>"title 6","body"=>"news body 6"],
            ["title"=>"title 7","body"=>"news body 7"],
            ["title"=>"title 8","body"=>"news body 8"],
            ["title"=>"title 9","body"=>"news body 9"],
        ];
        echo json_encode($data);
        break;
    default:
        echo json_encode([
            "message"=>"Bad type",
            "status"=>405
        ]);
        break;
}


