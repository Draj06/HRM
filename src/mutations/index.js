import gql from 'graphql-tag' 

export const ADD_EVALUATION =gql`
mutation
    addEmployeeEvaluationInfo($id:String!,$evaluaterName:String!,$evaluationNote:String!,$evaluationType:String!){
    addEmployeeEvaluationInfo(emp_id:$id,
        Name_of_the_evaluator:$evaluaterName,
        Enter_employee_note_here:$evaluationNote,
        Evaluation:$evaluationType)
        {
      Name_of_the_evaluator
      Enter_employee_note_here
      Evaluation
    }
  }`

  export const SET_EMPLOYEE_STATUS= gql`
  mutation
    updateEmployeeSectionEmployeeBasicInfoStatus($id:String!,$status:String!){
    updateEmployeeSectionEmployeeBasicInfoStatus(emp_id:$id,status:$status)
    }`
