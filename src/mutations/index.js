import gql from 'graphql-tag' 
// -------------------------------- Login- Mutations -----------------------------------

export const LOGIN_MUTATION= gql`
  mutation
    userLogin($email:String!,$password:String!){
    userLogin(user_email:$email,user_password:$password)
    {
      id
      profileImg
      userRole
      firstName
      lastName
      userCode
      userStatus
      officialEmail
      officialMobile
      personalEmail
      personalMobile
      clientId
      token
    }
  }`



export const ADD_EVALUATION =gql`
mutation
    addEmployeeEvaluationInfo($id:String!,$evaluaterName:String!,$evaluationNote:String!,$evaluationType:String!,$Evaluation_date:String!){
    addEmployeeEvaluationInfo(emp_id:$id,
        Name_of_the_evaluator:$evaluaterName,
        Enter_employee_note_here:$evaluationNote,
        Evaluation:$evaluationType,
        Evaluation_date:$Evaluation_date
        )
        {
          Name_of_the_evaluator
          Enter_employee_note_here
          Evaluation
          Evaluation_date
    }
  }`

  export const SET_EMPLOYEE_STATUS= gql`
  mutation
    updateEmployeeSectionEmployeeBasicInfoStatus($id:String!,$status:String!){
    updateEmployeeSectionEmployeeBasicInfoStatus(emp_id:$id,status:$status)
    }`


    // ________________________________________  Add dept desig delete ________________________________________


    export const ADD_DEPARTMENTS= gql`
      mutation
      addDepartments($dept_name:String!){
      addDepartments(dept_name:$dept_name)
      {
      id
      department
      }
    }`

    export const ADD_DESIGNATION= gql`
    mutation 
        addDesignations($designation:String!){
        addDesignations(designation:$designation)
        {
        id
        designation
      }
    }`

    export const DELETE_DEPARTMENT = gql`
        mutation 
        deleteDepartment($dept_name:String!){
        deleteDepartment(dept_name:$dept_name)
        {
          id
          department
      }
    }
    `

    export const DELETE_DESIGNATION = gql`
        mutation 
        deleteDesignation($designation:String!){
          deleteDesignation(designation:$designation)
        {
          id
          designation
        }
      }
    `
    

    // _______________________________________________________ Image upload test _______________________________________________

//     export const UPLOAD_IMAGE = gql`
//     mutation
//     singleUpload($designation:String!){
//     singleUpload(imgdata:"",size:"",type:"",name:"",lastModified:""){
       
//       }
//     }
// `