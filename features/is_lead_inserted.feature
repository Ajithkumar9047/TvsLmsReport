Feature:HTTP method on https://tvsmazlmsappuat01-acquistion.azurewebsites.net
   Scenario: Should verify the valid lead is inserted successfully.
      Given Post the correct lead as Accepted Lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Success"
         }
         """
   Scenario: Should verify the lead has been rejected as the mobile number is missing.
      Given Post the Mobile no is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid mobile number"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid mobile number.
      Given Post the Mobile no as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid mobile number"
         }
         """
   Scenario: Should verify the lead has been rejected as the Customer Name is missing.
      Given Post the Name is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "'CUSTOME R_ NAME' must not be empty.~Invalid/Missing Customer Name"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid Customer Name.
      Given Post the Invalid Name as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid/Missing Customer Name"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid  Source Id.
      Given Post the Invalid SourceId as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "INVALID_SOURCE"
         }
         """
   Scenario: Should verify the lead has been rejected as the Brand Code is missing.
      Given Post the Brand Code is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "INVALID_BRAND_CODE"
         }
         """
   Scenario: Should verify the lead has been rejected as the Area is missing.
      Given Post the Area is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid/Missing customer pincode"
         }
         """
   Scenario: Should verify the lead has been rejected as the Dealer Id is missing.
      Given Post the  DealerId is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid/missing Dealer_id"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid Enquiry Date.
      Given Post the Invalid Enquiry Date as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "Invalid/missing Enquiry Date"
         }
         """
   Scenario: Should verify the lead has been rejected as it has been inserted five times.
      Given Post the Duplicate lead as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "TOO_MANY_REQUEST_FROM_SAME_MOBILE_NUMBER"
         }
         """
