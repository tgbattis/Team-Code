# CIS 440 Nichols / Group: Coders R Us
import random

username_password = {
    "admin": "admin",
    "user1": "user1",
    "user2": "user2",
    "user3": "user3",
    "user4": "user4",
    "user5": "user5",
    "user6": "user6",
                    }

# GET user supplied username
login_username = input

# GET user supplied password
login_password = input

if username_password.get(login_username) == login_password:
    # Successful login
    pass
    # Move user to the appropriate page

else:
    # Failed login
    pass

# This can be done through js or py so we need to pick one
# Use randint function to select keys with string values that contain the questions
survey_questions = {
    1: "Q1",
    2: "Q2",
    3: "Q3",
    4: "Q4",
    5: "Q5",
    6: "Q6",
    7: "Q7",
    8: "Q8",
    9: "Q9",
    10: "Q10",
    11: "Q11",
    12: "Q12",
    13: "Q13",
    14: "Q14",
    15: "Q15"
                    }

for i in range(5):
   q_select = random.randint(1,15)
   # print survey_questions[q_select]
   