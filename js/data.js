const PROFILE = {
	name: 'Sonam Dhawan',
	timeline: [
		{
			organization: {
        id: 'cloudera',
				title: 'Cloudera',
				description: `Working as a full-stack developer - developing the UI and adding middleware support for Cloudera's Data Catalog. Data Catalog is a service within Cloudera Data Platform that enables you to understand, manage, secure, and govern data assets across the enterprise. Data Catalog helps you understand data across multiple clusters and across multiple CDP environments.`,
				role: 'Senior Software Engineer',
        logo: 'cloudera.png',
        website: 'https://www.cloudera.com'
			},
			date: {
				started_at: 'Dec 2020',
				ended_at: 'Present'
			},
			projects: [
				{
					title: 'Data Catalog - Classifications and Business Glossary',
          description: `- Worked on planning, development, and integration of features such as Asset Classification workflow, Glossary terms association with the Data Catalog application in the CDP platform.

            - Developed various reusable components and improved the usability score of the product from 46 to 90.

            - Established unit testing for the application and increased the coverage to 70%.`,
					technologies: 'Angular.js,Scala,SASS,Postgres'
				}
			]
		},
		{
			organization: {
        id: 'qubole',
				title: 'Qubole',
				description: '',
				role: 'Member of Technical Staff II',
        logo: 'qubole.png',
        website: 'https://www.qubole.com'
			},
			date: {
				started_at: 'Sept 2019',
				ended_at: 'Dec 2020'
			},
			projects: [
				{
					title: 'Qubole Workbench',
					description: `Working as a full-stack developer - developing the UI and adding middleware support for various features on the Qubole's Workbench, which is a SPA for ad hoc analysis of data in a data lake or other connected data source.

						Worked on some mission-critical features that were core to the experience of data analysis and improving the productivity of analysts, in an aggressive timeline from Beta to GA release.
						
						-> Collections - It helps in organizing work as you iteratively build to a final query.
							- Provides a query-composer with auto-save functionality as you type.
							- Curates all past query runs automatically for easy look-up.
							- Allows manual curation by moving commands across Collections.
							- Supports macro substitution in runtime.
							- Teams can collaborate by moving a collection into the Common tab.
							- Supports searching a Collection by name, text, shared.

						-> Datasets Explorer - Enables displaying all registered catalogs such as Hive metastore, Bigquery (for GCP accounts) and any other data store in one single tab. 
							- Lists all the schemas, tables and columns of a store in a paginated way.
							- Enables users to edit and delete existing data stores using the same interface.

						-> Datasets Forms - Enabled users to add custom datasets by using dynamic form.

						-> Auto Stats Collection (Hive) Consumption - It helps in facilitating the time spent during the Data Discovery phase by the Analysts and accelerating the Data Profiling work, in the Data Discovery workflow.
							- Integrated additional information with the table preview for quick data profiling.

						-> Cluster Metrics - It facilitates command diagnostics during command execution by showing the cluster metrics.
							- Displays clusters by grouping them based on the cluster status, favouring UP clusters.`,
					technologies: 'Ember.js,JavaScript,jQuery,SASS,Ruby on Rails,MySQL,Elastic Search,Python'
				}
			]
		},
		{
			organization: {
        id: 'streamoid1',
				title: 'Streamoid Technologies',
				description: '',
				role: 'Member of Technical Staff',
        logo: 'streamoid.png',
        website: 'https://www.streamoid.com'
			},
			date: {
				started_at: 'July 2017',
				ended_at: 'Sept 2019'
			},
			projects: [
				{
					title: 'Outfitter Dashboard',
					description: `Outfitter is a recommendation service which generates outfits for all products in a client's catalogue in real time based on top styling principles considering various attributes such as colour, fashion trends, style, age group, distinct tastes across different geographical locations, etc.

						Developed the dashboard to enable the stylists to manage all the internal workings of the Outfitter -
						1. Inputting and Visualising the input data for the product
						2. Verifying the accuracy of the input data by running the Outfitter in real time through the Dashboard
						3. Review and Rate the outfits generated
						4. Upload, Review and Catalog Colour models which are used to generate Outfits
					
						The dashboard was helpful in reducing the delivery time by 80% and improving productivity to 2x. With the operation, the product delivered on increased basket size, average order value, and revenue metrics for the clients.
					
						Released various iterations of major and minor releases as the principal developer.`,
					technologies: 'React.js,Redux,Node.js,Python,PHP,MySQL,SASS,Express,Webpack'
				},
				{
					title: 'Outfitter Run Management',
					description: `An Outfitter Run generates complete outfits for all products in a client's catalogue in real time. It requires running the Outfitter service based on various parameters with respect to the fashion trends, styling principles, style, and the distinct taste across different geographical locations.

						The Outfitter Run Management helps with this such that it supports configuration of various parameters helps and caching the generated outfits in Redis to be served directly to the customer.
						
						Designed and developed an automated backend process to handle various configuration parameters for initiating an Outfitter run and processing the result. The process supports concurrent Outfitter runs.
						
						Developed APIs and integrated them with the frontend (Outfitter Dashboard) to facilitate Outfit generation and curation process by the fashion stylists.
						
						This process facilitates the process of validating the input data to the Outfitter, by using a simple UI and be able to generate outfits in real time by specifying the configuration parameters.
						
						In addition the ability to serve the clients directly from the Redis cache, once the validation is successful.`,
					technologies: 'Python,MySQL,Redis,Apache Thrift'
				},
				{
					title: 'Automating Colour Bank Indexing',
					description: `Colour is an important criteria while generating outfits with various products. A colour bank is required as an input data in the Outfitter service to determine a good colour scheme for an outfit. A colour bank is a collection of good colour models.

						Developed a script for indexing huge dataset of colour models in PDP and Widget format provided in the form of -
						1. Manually curated models in multiple different Colour folders.
						2. Crawled product data from various websites.
						
						Created an API to initiate the process of indexing.
						
						This automated pipeline served as an abstraction for the underlying indexing process for huge amounts of data in a concurrent fashion.
						
						This enabled the fashion stylists to quickly validate the Outfit recommendations by specifying a Colour bank and in turn verify the accuracy of the Colour bank.`,
					technologies: 'PHP,MySQL,Bash'
				},
				{
					title: 'Mix n Match Recommendation SDK',
					description: `Mix n Match SDK implemented the beautiful UI displaying:
						- Similar products recommendation for the target product
						- Outfits recommendation for the target product
						- Product metadata on selection of a product
						
						Developed Javascript SDK that highlighted the capabilities of the two major recommendation services - "Outfitter" and "Similar", provided by the company to the customers.`,
					technologies: 'Javascript,JQuery,MySQL,CSS'
				}
			]
		},
		{
			organization: {
        id: 'streamoid2',
				title: 'Streamoid Technologies',
				description: '',
				role: 'Intern',
        logo: 'streamoid.png',
        website: 'https://www.streamoid.com'
			},
			date: {
				started_at: 'July 2017',
				ended_at: 'Sept 2019'	
			},
			projects: [
				{
					title: 'DB Cleaner',
					description: `Desgined and developed the front-end and back-end for the SPA. The application was used to enable the fashion stylists in curating product images form various sources through: 
						- Manual classification of various product metadata attributes.
						- Validating the classification done by the ML models used in the indexing pipeline.`,
					technologies: 'JavaScript,JQuery,PHP,MySQL,HTML,CSS'
				}
			]
		},
		{
			organization: {
        id: 'mnnit',
				title: 'National Institute of Technology, Allahabad',
				description: '9.14 CGPA',
				role: 'Master of Computer Application',
        logo: 'mnnit.png',
        website: 'http://www.mnnit.ac.in'
			},
			date: {
				started_at: 'July 2014',
				ended_at: 'May 2017'
			},
			projects: [
				{
					title: 'E-Commerce Website',
					description: 'Designed an E-commerce website.',
					technologies: 'PHP,MySQL,HTML,CSS'
				},
				{
					title: 'Movie Recommendation System',
					description: `Developed a recommendation service GUI application which suggested movies to the users based on their ratings provided for various movies they have watched.
            - Developed the GUI using the graphics classes provided in JDK.
            - The recommendation was done using the Apache Mahout open-source framework with the Log-Likelihood Ratio Similarity algorithm.`,
					technologies: 'Java'
				}
			]
		},
		{
			organization: {
        id: 'sggscc',
				title: 'University of Delhi, Delhi',
				description: '',
				role: 'B.Sc. (Hons.) Computer Science',
        logo: 'DU.png',
        website: 'http://cs.du.ac.in'
			},
			date: {
				started_at: 'July 2011',
				ended_at: 'May 2014'
			},
			projects: [
			]
		}
	]
}

const SKILLS = {
  frontend: [
    {name: 'Javascript',image: 'javascript.svg',website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {name: 'ES6',image: 'es6.svg', website: 'http://es6-features.org'},
    {name: 'Typescript',image: 'typescript.svg', website: 'https://www.typescriptlang.org'},
    {name: 'React',image: 'react.svg', website: 'https://reactjs.org'},
    {name: 'Redux',image: 'redux.svg', website: 'https://redux.js.org'},
    {name: 'Angular',image: 'angular.svg', website: 'https://angular.io'},
    {name: 'Ember',image: 'ember.svg', website: 'https://emberjs.com'},
    {name: 'JQuery',image: 'jquery.svg', website: 'https://jquery.com'},
    {name: 'HTML5',image: 'html.svg', website: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'},
    {name: 'CSS3',image: 'css.svg', website: 'https://www.css3.info'},
    {name: 'SASS',image: 'sass.svg', website: 'https://sass-lang.com'},
    {name: 'Bootstrap',image: 'bootstrap.svg', website: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/'},
    {name: 'Materialize',image: 'materialize.svg', website: 'https://materializecss.com'},
    {name: 'Babel',image: 'babel.svg',website: 'https://babeljs.io'},
  ],
  backend: [
    {name: 'Node',image: 'nodejs.svg', website: 'https://nodejs.org/en/about/'},
    {name: 'Python',image: 'python.svg', website: 'https://docs.python.org/3/using/index.html'},
    {name: 'PHP',image: 'php.svg', website: 'https://www.php.net'},
    {name: 'Mongo DB',image: 'mongodb.png', website: 'https://www.mongodb.com'},
    {name: 'MySQL',image: 'mysql.svg', website: 'https://dev.mysql.com/doc/'},
    {name: 'PostgreSQL',image: 'postgres.svg', website: 'https://www.postgresql.org/docs/'},
    {name: 'Elastic Search',image: 'elasticsearch.png', website: 'https://www.elastic.co/guide/en/welcome-to-elastic/current/welcome-to-elastic.html'},
    {name: 'Redis',image: 'redis.svg', website: 'https://redis.io/topics/introduction'},
    {name: 'Rest API',image: 'api.svg', website: 'https://restfulapi.net'},
  ],
  Others: [
    {name: 'Nginx',image: 'nginx.png', website: 'https://www.nginx.com'},
    {name: 'Docker',image: 'docker.png', website: 'https://docs.docker.com'},
    {name: 'Kubernetes',image: 'kubernetes.svg', website: 'https://kubernetes.io/docs/home/'},
    {name: 'AWS',image: 'aws.svg', website: 'https://aws.amazon.com'},
    {name: 'Git',image: 'git.svg', website: 'https://git-scm.com/doc'},
    {name: 'Bitbucket',image: 'bitbucket.svg', website: 'https://bitbucket.org/product/guides/getting-started/overview'},
    {name: 'VS Code',image: 'vscode.svg', website: 'https://code.visualstudio.com'},
  ]
}
