const PROFILE = {
	name: 'Sonam Dhawan',
	timeline: [
		{
			organization: {
				title: 'Cloudera',
				description: `Working as a full-stack developer - developing the UI and adding middleware support for Cloudera's Data Catalog. Data Catalog is a service within Cloudera Data Platform that enables you to understand, manage, secure, and govern data assets across the enterprise. Data Catalog helps you understand data across multiple clusters and across multiple CDP environments.`,
				role: 'Senior Software Engineer',
				logo: 'cloudera.png'
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
				title: 'Qubole',
				description: '',
				role: 'Member of Technical Staff II',
				logo: 'qubole.png'
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
				title: 'Streamoid Technologies',
				description: '',
				role: 'Member of Technical Staff',
				logo: 'streamoid.png'
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
				title: 'Streamoid Technologies',
				description: '',
				role: 'Intern',
				logo: 'streamoid.png'
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
				title: 'National Institute of Technology, Allahabad',
				description: '9.14 CGPA',
				role: 'Master of Computer Application',
				logo: 'mnnit.png'
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
				title: 'University of Delhi, Delhi',
				description: '',
				role: 'B.Sc. (Hons.) Computer Science',
				logo: 'DU.png'
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