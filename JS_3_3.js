let enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

  function name_spec(num){
    if (num > 0 && num < 10) return "человек";
    else return "сотрудников";
  }

  function check_null_emp(num){
    if (num == 0) return "нет";
    else return num;
  }


  enterprises.forEach(ent => {
    count_emp = 0;

    ent.departments.forEach(emp =>{
        console.log(`- ${emp.name} (${check_null_emp(emp.employees_count)} ${name_spec(emp.employees_count)})`);
        count_emp += emp.employees_count;
    })
    console.log(`${ent.name} (${check_null_emp(count_emp)} ${name_spec(count_emp)})`);
  });

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 1 Предприятие 5

function getEnterpriseName(a){
  enterprises.forEach(enterprise => {
    enterprise.departments.forEach(item => {
      if (item.id == a || item.name == a) { return console.log(`Предприятие ${enterprise.id}`) }
    });
  });
}

getEnterpriseName(2)
getEnterpriseName("Отдел аналитики")


// // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// // Пример:
// addEnterprise("Название нового предприятия")


//функция проверки последнего id для создания уникального
function check_last_id(){
  last_id = 0
  enterprises.forEach(enterprise => {
    enterprise.departments.forEach(item => {
      if (last_id < item.id){
        last_id = item.id
       }
    });
  });
  return last_id + 1
}


// //функция добавления нового предприятия
function addEnterprise(n){
  new_enterprise = {
      id: check_last_id(),
      name: n,
      departments: []
    }
  enterprises.push(new_enterprise)
}

addEnterprise("Предприятие 4")
console.log(enterprises)