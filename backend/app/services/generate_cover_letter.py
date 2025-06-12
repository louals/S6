# generate_cover_letter.py
from openai import OpenAI
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def replace_placeholders(letter: str, user_info: dict) -> str:
    return (
        letter.replace("[Your Name]", user_info.get("name", ""))
              .replace("[Email Address]", user_info.get("email", ""))
              .replace("[Phone Number]", user_info.get("phone", ""))
              .replace("[Your Address]", user_info.get("address", ""))
              .replace("[City, State, ZIP]", user_info.get("location", ""))
              .replace("[Today's Date]", datetime.now().strftime("%B %d, %Y"))
    )
def generate_cover_letter(cv_info: dict, job_info: dict, user_info: dict) -> str:
    prompt = f"""
    Write a professional and personalized cover letter based on:

    Candidate:
    Name: {user_info.get("name")}
    Email: {user_info.get("email")}
    Phone: {user_info.get("phone")}
    Skills: {", ".join(cv_info.get("skills", []))}
    Education: {"; ".join([f"{e['degree']} at {e['institution']}" for e in cv_info.get("education", [])])}
    Experience: {"; ".join([f"{e['title']}: {e['description']}" for e in cv_info.get("experience", [])])}

    Job:
    Title: {job_info.get("title")}
    Description: {job_info.get("description")}
    Required Skills: {", ".join(job_info.get("required_skills", []))}

    Output a formal cover letter that includes placeholders like [Your Address], [City, State, ZIP], etc.
    """

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    raw_letter = response.choices[0].message.content.strip()
    return replace_placeholders(raw_letter, user_info)