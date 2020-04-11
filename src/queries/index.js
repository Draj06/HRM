import gql from 'graphql-tag'


export const LOCATION_GRAPH = gql `
query{
  getAllEmpLocation{
    emp_location
    emp_location_count
  }
}
` 
export const RELEGION_GRAPH = gql `
query{
  getAllEmpLocation{
    emp_location
    emp_location_count
  }
}
`
export const GENDER_GRAPH = gql `
query{
  getAllEmpGenderCount{
    emp_gender
    emp_gender_count
  }
}`

export const AGE_GRAPH = gql `
query{
  getAllEmpAgeRange{
    age
    total_emp
  }
}`
export const DEPT_DESIG = gql `
query getAllDeptOrPositions($initialState: String!) {
  getAllDeptOrPositions(param: $initialState) {
    emp_data
  }
}
`

export const MANPOWER_CURR_PREV_MONTH_COUNT = gql `
query{
  getCurPrevMonthEmps{
    current_month{
      total_employes
      ariving
      exiting
      current_month
    }
    previous_month{
      total_employes
      arrived
      exited
      previous_month
    }
  }
}

`

export const MANPOWER_GRAPH_MONTH = gql `
query{
  getDashboardManpowerActiveCount{
    total_count
       mon_year
  }
}`

export const SALARY_GRAPH1 = gql `
query{
  getDashboardSalaryActiveCount{
    total_count
    mon_year
    total_ctc
    total_gross_salary
    total_salary_variation   
  }
}`


export const MANPOWER_DEPT_VS_COUNT =gql `

query getAllDeptOrPositions($month: String!,$year: Int!) {
  getAllActiveDeptEmpsByMonthYear(month:$month,year:$year){
    dept_name
    total_emp_count
  }

}
`
export const MANPOWER_OVERBOARD_ON_DATE_CHANGE =gql `
query getDynamicManpowerOverBoarddata($month1: String!,$year1: Int!) {
  getDynamicManpowerOverBoarddata(month:$month1,year:$year1){
    current_mon{
      carrived
      cexited
      ctotal
      cmon_year
    }
    previous_mon{
      parrived
      pexited
      ptotal
      pmon_year
    }
  
  }
}`

export const MANPOWER_OVERBOARD_ON_CLICK =gql `
query getOverBoardEmpBasedOnMonthYearStatus($month: String!,$year: Int!,$status: String!) {
      getOverBoardEmpBasedOnMonthYearStatus(month:$month,year:$year,status:$status){
        emp_name
        emp_dept_name
        emp_position_name
        emp_gender
        emp_tentative_doj
        emp_doj
        emp_tentative_doe
        emp_doe
      
  }
}`

export const MANPOWER_DEPARTMENT_EMPLOYE =gql `
query getOverBoardEmpBasedOnDeptMonthYearStatus($month: String!,$year: Int!,$dept: String!) {
  getOverBoardEmpBasedOnDeptMonthYearStatus(month:$month,year:$year,dept:$dept)
  {
    emp_name
    emp_dept_name
    emp_position_name
    emp_gender
    emp_tentative_doj
    emp_doj
    emp_tentative_doe
    emp_doe
  }
}`

export const SALARY_OVERBOARD_FIRRST_LOAD =gql `
query{
  getCurandPreMonthSalaryStatusOverBoard{
    current_month{
      gross
      ctc
      variation
      mon_year
   
    }
    previous_month{
      gross
      ctc
      variation
      mon_year
    }
  }
}`
export const SALARY_GRAPH_ONCLICK_DEPARTMENT =gql `
query getActiveDeptEmpAndSalaryDetailsBasedOnMonYear($month: String!,$year: Int!) {
  getActiveDeptEmpAndSalaryDetailsBasedOnMonYear(month:$month,year:$year)
  {
  dept_name
    count
    ctc
    gross
    variation  
   
  }
}`

export const SALARY_GRAPH2 =gql`
query {
  getDashSalaryGraphTwoActiveMinMaxAvgCount {
    min_salary
    max_salary
    avg_salary
    total_count
    mon_year
  }
}
`

  export const SALARY_GRAPH2_DEPT= gql`
    query getDashSalaryGraphTwoByMonYear($month: String!,$year: Int!) {
    getDashSalaryGraphTwoByMonYear(month:$month,year:$year){
      
      emp_dept_name
      min_salary
      max_salary
      avg_salary
      total_count
      
    }
  }`

export const SALARY_GRAPH1_2_DEPT_WISE_POPUP =gql `
query getSalaryGgraphPopUpByMonYearDept($month: String!,$year: Int!,$dept: String!) {
  getSalaryGgraphPopUpByMonYearDept(month:$month,year:$year,dept:$dept)
  {
    emp_name
    emp_dept_name
    emp_position_name
    emp_ctc
    emp_gross_salary
      }
      }`
