/*
The DOMContentLoaded event fires when the initial HTML document has been completely loaded 
and parsed, without waiting for stylesheets, images, and subframes to finish loading.
*/
document.addEventListener("DOMContentLoaded", function(event) {
  const timelineContainer = document.querySelector('#experience > .timeline');
	PROFILE.timeline.forEach(timeline => {
		const timelineElem = createTimeline(timeline);
		timelineContainer.appendChild(timelineElem);	
  })

  const skillsBody = document.querySelector('#skills > .skills-body');
  Object.keys(SKILLS).forEach(skillType => {
    const skillsPerType = SKILLS[skillType];
    skillsBody.appendChild(createSkillTypeContainer(skillType, skillsPerType));
  })
});

function createTimeline(timeline) {
	const timelineElem = document.createElement('div');
	timelineElem.className = 'timeline-element';
	timelineElem.classList.add('project');
	const timelineDateElem = document.createElement('div');
	timelineDateElem.className = 'timeline-element-date';
	const timelineContentsElem = document.createElement('div');
	timelineContentsElem.className = 'timeline-element-contents';

	timelineDateElem.appendChild(createTimelineDataElem(timeline.date));
	timelineContentsElem.appendChild(createTimelineOrgElems(timeline.organization));
	timeline.projects.forEach(project => {
		timelineContentsElem.appendChild(createOrgProjectElems(project));
  });
  timelineContentsElem.id = timeline.organization.id;
	timelineElem.appendChild(timelineDateElem);
	timelineElem.appendChild(timelineContentsElem);

	return timelineElem;
}

function createTimelineDataElem(date) {
	const timelineDateElem = document.createElement('div');
	timelineDateElem.className = 'timeline-element-date';
	const timelineDateTextElem = document.createElement('div');
	timelineDateTextElem.className = 'timeline-element-date-text';

	const dateTextNode = document.createTextNode(date.started_at + ' - ' + date.ended_at);

	timelineDateTextElem.appendChild(dateTextNode);
	timelineDateElem.appendChild(timelineDateTextElem);
	return timelineDateElem;
}

function createTimelineOrgElems(organization) {
  const organizationDetailElem = document.createElement('div');
  organizationDetailElem.className = 'organization-detail';
  organizationDetailElem.addEventListener('click', toggleOrganizationDetail.bind(null, organization.id), false);

  const organizationLogoElem = document.createElement('img');
  organizationLogoElem.className = 'organization-logo';
  organizationLogoElem.src = './assets/img/' + organization.logo;
  organizationDetailElem.appendChild(organizationLogoElem);

	const organizationTitleElem = document.createElement('div');
	organizationTitleElem.className = 'organization-title';
  organizationTitleElem.classList.add('title');
  const orgRoleElem = document.createElement('span');
  orgRoleElem.innerText = organization.role;
  const orgNameElem = document.createElement('a');
  orgNameElem.innerText = ' @ ' + organization.title;
  orgNameElem.className = 'highlight-text';
  orgNameElem.href = organization.website;
  orgNameElem.target = "_blank";
  organizationTitleElem.appendChild(orgRoleElem);
  organizationTitleElem.appendChild(orgNameElem);
	organizationDetailElem.appendChild(organizationTitleElem);
	return organizationDetailElem;
}

function createOrgProjectElems(project) {
  const PROJECT_TECH_HEADING = 'TECH STACK';
	const projectDetailElem = document.createElement('div');
  projectDetailElem.className = 'project-detail';
  projectDetailElem.classList.add('hide');
	
	const projectTitleElem = document.createElement('div');
	projectTitleElem.className = 'project-title';
	projectTitleElem.classList.add('title');
	projectTitleElem.appendChild(document.createTextNode(project.title));

	const projectDescriptionElem = document.createElement('div');
	projectDescriptionElem.className = 'project-description';
	projectDescriptionElem.appendChild(document.createTextNode(project.description));

	const projectTechnologiesElem = document.createElement('div');
	projectTechnologiesElem.className = 'project-technologies';
  const projectTechHeading = document.createElement('div');
  projectTechHeading.className = 'project-tech-heading';
  projectTechHeading.innerText = PROJECT_TECH_HEADING;
  const projectTechBody = document.createElement('div');
  projectTechBody.className = 'project-tech-body';
  project.technologies.split(',').forEach(tech => {
    const techElem = document.createElement('span');
    techElem.className = 'tech-name';
    techElem.innerText = tech;
    projectTechBody.appendChild(techElem);
  })
  projectTechnologiesElem.appendChild(projectTechHeading);
  projectTechnologiesElem.appendChild(projectTechBody);

	projectDetailElem.appendChild(projectTitleElem);
	projectDetailElem.appendChild(projectDescriptionElem);
	projectDetailElem.appendChild(projectTechnologiesElem);
	return projectDetailElem;
}

function createSkillTypeContainer(skillType, skillsPerType) {
  const skillTypeHeadingElem = document.createElement('h2');
  skillTypeHeadingElem.innerText = skillType;
  const skillTypeContainer = document.createElement('div');
  skillTypeContainer.className = 'container';

  skillsPerType.forEach(skill => {
    const skillImageElem = document.createElement('img');
    skillImageElem.src = './assets/img/' + skill.image;
    skillImageElem.alt = skill.name;
    const skillText = document.createElement('p');
    skillText.innerText = skill.name;

    const skillWrapperElem = document.createElement('a');
    skillWrapperElem.className = 'skill-wrapper';
    skillWrapperElem.href = skill.website;
    skillWrapperElem.target = "_blank";
    skillWrapperElem.appendChild(skillImageElem);
    skillWrapperElem.appendChild(skillText);


    skillTypeContainer.appendChild(skillWrapperElem);
  })
  const skillTypeBody = document.createElement('div');
  skillTypeBody.className = 'skills-type';
  skillTypeBody.appendChild(skillTypeHeadingElem);
  skillTypeBody.appendChild(skillTypeContainer);
  return skillTypeBody;
}

function toggleOrganizationDetail(orgId) {
  const projectDetailElems = document.querySelectorAll('#' + orgId + ' > .project-detail');
  projectDetailElems.forEach(projectDetailElem => {
    if(projectDetailElem.classList.contains('show')) {
      projectDetailElem.classList.add('hide');
      projectDetailElem.classList.remove('show');
    } else if(projectDetailElem.classList.contains('hide')) {
      projectDetailElem.classList.add('show');
      projectDetailElem.classList.remove('hide');
    }
  })
}
