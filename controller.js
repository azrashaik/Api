const pool = require('./sdb')


const getStudents = (req, res) => {
    pool.query("select * from std", (error, result) => {
        if (error) { res.status(400).send(error) }
        else {
            res.status(200).json(result.rows)
        }
    });


}
const getStudentById = (req, res) => {
    const id = req.params.id;
    pool.query("select * from std where id = $1", [id], (error, result) => {
        console.log(error)
        if (error) { res.status(400).send(error) }
        else {
            res.status(200).json(result.rows)
        }
    });
}

const addStudent = (req, res) => {
    const { id, name, email, age, dob } = req.body;
    pool.query("select s from std s where s.id = $1", [id], (error, result) => {
        if (result.rows.length > 0) {
            res.status(400).json({ "message": "id already exists" })
        }

        else {
            if (error) { res.status(400).send(error) }

            else {

                pool.query("insert into std(id,name,email,age,dob) values ($1,$2,$3,$4,$5)", [id, name, email, age, dob], (error, result) => {
                    if (error) {
                        { res.status(400).json({"status":"failure",
                        "message":"failed to insert record"
                    }) }
                    }
                    else { res.status(200).json({"status":"success",
                    "message":"record inserted sccessfull",}) }
                })
            }
        }




    })


}
module.exports = {
    getStudents,
    getStudentById,
    addStudent,
};