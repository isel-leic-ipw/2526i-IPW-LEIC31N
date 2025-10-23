"use strict";
let students = [];
let last_id = 0;


function getStudents (req,ret)  {
    console.log("students");

    ret.status(200).json(students);
}

export default {
    getStudents
}