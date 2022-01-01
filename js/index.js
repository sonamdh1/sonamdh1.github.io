/*
The DOMContentLoaded event fires when the initial HTML document has been completely loaded 
and parsed, without waiting for stylesheets, images, and subframes to finish loading.
*/
document.addEventListener("DOMContentLoaded", function(event) {
    const timelineContainer = document.querySelector('#experience > .timeline');
	console.log(timelineContainer);

	PROFILE.timeline.forEach(timeline => {
		const timelineElem = createTimeline(timeline);
		timelineContainer.appendChild(timelineElem);	
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

  const organizationLogoElem = document.createElement('img');
  organizationLogoElem.className = 'organization-logo';
  organizationLogoElem.src = './assets/img/' + organization.logo;
  organizationDetailElem.appendChild(organizationLogoElem);

	const organizationTitleElem = document.createElement('div');
	organizationTitleElem.className = 'organization-title';
  organizationTitleElem.classList.add('title');
  const orgRoleElem = document.createElement('span');
  orgRoleElem.innerText = organization.role;
  const orgNameElem = document.createElement('span');
  orgNameElem.innerText = ' @ ' + organization.title;
  orgNameElem.className = 'highlight-text';
  organizationTitleElem.appendChild(orgRoleElem);
  organizationTitleElem.appendChild(orgNameElem);
	organizationDetailElem.appendChild(organizationTitleElem);
	return organizationDetailElem;
}

function createOrgProjectElems(project) {
  const PROJECT_TECH_HEADING = 'TECH STACK';
	const projectDetailElem = document.createElement('div');
	projectDetailElem.className = 'project-detail';
	
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
