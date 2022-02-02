function change_experience_content (experience_name)
{

  switch (experience_name) {
    case "ai_4_good":
      document.getElementById("ai4good_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";

      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/ai4good_logo.jpg" class="experience_image" style="height:100px;"></img>
        <p class="experience_job_title">ML Researcher/Web Developer <p style="color:#cc0000;font-weight:400;">@AI for good</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Developed an automated broken link finder for the website, which reduced the time to find all broken links from 2 weeks to 15 minutes, which allowed for faster link replacements</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Designed and presented a prototype agriculture land analyzer software for the city of Kelowna to cut water usage by around 35% to improve water conservation during drought seasons</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Built web pages for the website on new committees that led to 3 organizations contacting AI for Good to help them on ongoing projects</p>
      </div>
      `;
      document.getElementById("experience_content").innerHTML = experience_content;
      break;
    case "easyexpunctions":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/ee_logo.jpg" class="experience_image" style="width:100px;height:100px;"></img>
        <p class="experience_job_title">Software Engineer Intern <p style="color:#cc0000;font-weight:400;">@Easy Expunction</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Automated customer search/update on the internal web app, which increased the number of searches/updates by 120% to send out more emails and have an up to date customer database</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Implemented an API for the automation service, which sent out around 2,500 sales emails per day that would lead to around $2000 in revenue per day</p>
      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;
    case "pwrdby":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/pwrdby_logo.png" class="experience_image"></img>
        <p class="experience_job_title">Data Science Intern <p style="color:#cc0000;font-weight:400;">@Pwrd By</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Built automation scripts for the data analysis team to cut time from 3 hours to 1 hour, which allowed more natural disaster maps to be analyzed</p>
      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;
    case "mitre":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(204,0,0,0.4)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/mitre_logo.png" class="experience_image"></img>
        <p class="experience_job_title">Software Engineer Intern <p style="color:#cc0000;font-weight:400;">@MITRE</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Developed a service management tool with a stellar team that automated part ordering and taking inventory by 100%, which decreased product shortages by 96%</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Designed and developed a feature to send out daily inventory in excel format to the 3 managers, which helped save 1 hour of time</p>

      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;

  }
}
