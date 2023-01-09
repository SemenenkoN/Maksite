(function (){
    let course = document.querySelector("#course")
    let group = document.querySelector("#group")
    let day = document.querySelector("#day")

    let schedule = document.querySelector(".schedule-list")

    fetch("/courses.json").then(response=>{
        return response.json()
    }).then(text=>{
        let tmp = '';
        text.data.forEach(item=>{
            tmp += `<option value="${item}">${item}</option>`
        })

        course.innerHTML = `<option value="-1">Выберите курс</option>`+tmp;
    })

    fetch("/groups.json").then(response=>{
        return response.json()
    }).then(text=>{
        let tmp = '';
        text.data.forEach(item=>{
            tmp += `<option value="${item}">${item}</option>`
        })

        group.innerHTML = `<option value="-1">Выберите группу</option>`+tmp;
    })

    fetch("/day_of_week.json").then(response=>{
        return response.json()
    }).then(text=>{
        let tmp = '';
        text.data.forEach(item=>{
            tmp += `<option value="${item}">${item}</option>`
        })

        day.innerHTML = `<option value="-1">Выберите группу</option>`+tmp;
    })

    let loadSchedule = function (){
        fetch("/schedule.json").then(response=>{
            return response.json()
        }).then(text=>{
            let tmp = '';

            console.log("Test")
            console.log(course.value)
            console.log(day.value)
            console.log(group.value)

            text.data.forEach(item=>{

                if (course.value!=="-1"&&course.value===item.course ||
                    group.value!=="-1"&&group.value===item.group ||
                    day.value!=="-1"&&day.value===item.day_of_week ||
                    day.value=="-1"&&group.value=="-1"&&day.value=="-1"
                )
                item.subjects.forEach(subject=>{
                    tmp += `
            <li class="schedule-item" data-auditory="${subject.auditory}">
                <div class="part">
                    <p>${item.day_of_week}</p>
                    <p>17.11.2022</p>
                </div>
                <div class="part">
                    <p>${subject.lesson}</p>
                    <p>(${subject.lesson_time})</p>
                </div>
                <div class="part">
                    <p>(${subject.title})</p>
                    <p><small><em>${subject.teacher}</em></small></p>
                </div>
            </li>
            `
                })

            })

            schedule.innerHTML = tmp;
        })



    }


    loadSchedule();

    let searchBtn = document.querySelector("#search-btn")

    searchBtn.onclick = function (){
        loadSchedule();
    }
})();