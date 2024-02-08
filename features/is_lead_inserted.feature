Feature:As a scheduler I want to check the Success, Missing data and Rejected leads from a Lead source
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
         "message":"INVALID_MOBILE_NUMBER"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid mobile number.
      Given Post the Mobile no as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message":"INVALID_MOBILE_NUMBER"
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
   # Scenario: Should verify the lead has been rejected as it has been inserted five times.
   #    Given Post the Duplicate lead as Rejected lead
   #    When I received a response
   #       Then I expect the response as
   #       """
   #       {
   #       "message": "TOO_MANY_REQUEST_FROM_SAME_MOBILE_NUMBER"
   #       }
   #       """

      # Scenario: Should verify the lead has been rejected as the Area is missing.
   #    Given Post the Area is empty as Missed lead
   #    When I received a response
   #       Then I expect the response as
   #       """
   #       {
   #       "message": "Invalid/Missing customer pincode"
   #       }
   #       """
   Scenario: Should verify the lead has been rejected as an invalid modelId.
      Given Post the Invalid ModelID as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "INVALID_MODEL_ID_AND_PART_ID"
         }
         """
   Scenario: Should verify the lead has been rejected as the ModelID is missing.
      Given Post the ModelID is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message":"INVALID_MODEL_ID_AND_PART_ID"
         }
         """
   Scenario: Should verify the lead has been rejected as an invalid PartId.
      Given Post the Invalid PartID as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "INVALID_MODEL_ID_AND_PART_ID"
         }
         """
   Scenario: Should verify the lead has been rejected as the PartID is missing.
      Given Post the PartID is empty as Missed lead
      When I received a response
         Then I expect the response as
         """
         {
         "message":"INVALID_MODEL_ID_AND_PART_ID"
         }
         """
      Scenario: Should verify the lead has been rejected as an invalid Brand Code.
      Given Post the Invalid brand code as Rejected lead
      When I received a response
         Then I expect the response as
         """
         {
         "message": "INVALID_MODEL_ID_AND_PART_ID"
         }
         """
