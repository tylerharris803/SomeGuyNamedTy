//document.getElementById("button_submit").addEventListener("click", function () {
//    alert("Grade Percentages: Assignments " + document.getElementById("Assignments").value + "% -- " +
//        "Group Project " + document.getElementById("GroupProject").value + "% -- " +
//        "Quizzes " + document.getElementById("Quizzes").value + "% -- " +
//        "Exams " + document.getElementById("Exams").value + "% -- " +
//        "Intex " + document.getElementById("Intex").value + "% "
//        )
//})

$("#button_submit").click(function () {
    var varassignment = $("#Assignments").val()
    var vargroupproject = $("#GroupProject").val()
    var varquizzes = $("#Quizzes").val()
    var varexams = $("#Exams").val()
    var varintex = $("#Intex").val()

    var assignmentweight = varassignment * .55
    var groupprojectweight = vargroupproject * .05
    var quizzesweight = varquizzes * .10
    var examsweight = varexams * .20
    var intexweight = varintex * .10

    var finalpercent = assignmentweight + groupprojectweight + quizzesweight + examsweight + intexweight

    var finalgrade = ""

    if (finalpercent >= 94) {
        finalgrade = "A"
    } else if (finalpercent >= 90) {
        finalgrade = "A-"
    } else if (finalpercent >= 87) {
        finalgrade = "B+"
    } else if (finalpercent >= 84) {
        finalgrade = "B"
    } else if (finalpercent >= 80) {
        finalgrade = "B-"
    } else if (finalpercent >= 77) {
        finalgrade = "C+"
    } else if (finalpercent >= 74) {
        finalgrade = "C"
    } else if (finalpercent >= 70) {
        finalgrade = "C"
    } else if (finalpercent >= 67) {
        finalgrade = "D+"
    } else if (finalpercent >= 64) {
        finalgrade = "D"
    } else if (finalpercent >= 60) {
        finalgrade = "D-"
    } else {
        finalgrade = "E"
    }

    alert("Grade Percentages: Assignments " + varassignment + "% -- " +
        "GroupProject " + vargroupproject + "% -- " +
        "Quizzes " + varquizzes + "% -- " +
        "Exams " + varexams + "% -- " +
        "Intex " + varintex + "% " + 
        "\n\n Final Grade Percentage: " + finalpercent + "%  "
        + "\n\n Final Grade Letter: " + finalgrade
    )
    
})


