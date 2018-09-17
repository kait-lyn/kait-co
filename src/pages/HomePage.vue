<template>
  <div class="container">
    <div class="content">
      <section>
        <h1>Hello, world!</h1>
        <div class="section-content">
          My name's Kaitlyn Ly, and I'm a software engineer. I am passionate about writing beautiful code!
          <br />I firmly believe that there is always room for improvement and that learning never stops.
        </div>
      </section>

      <section>
        <h1>Experience</h1>
        <div class="section-content">
          <div v-for="item in experience" :key="item" class="experience">
            <div class="title">
              {{item.title}}
            </div>
            <ul>
              <li v-for="experience in item.list" :key="experience"> {{experience}} </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h1>Work</h1>
        <div class="section-content">
          <div v-for="job in workExperience" :key="job.company" class="job">
            <div class="title">
              {{job.title}}
              <span>
                {{job.start}} - {{job.finish}}
              </span>
            </div>
            <ul>
              <li v-for="task in job.tasks" :key="task">
                {{task}}
              </li>
            </uL>
          </div>
        </div>
      </section>

      <section v-if="false">
        <h1>Education</h1>
        <div class="section-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
        </div>
      </section>

      <section v-if="false">
        <h1>Projects & Concepts</h1>
        <div class="section-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      experience: [
        {
          title: 'Languages',
          list: ['Vue JS', 'Javascript', 'HTML', 'CSS', 'Python', 'Java', 'React Native'],
        },
        {
          title: 'Frameworks & Tools',
          list: ['Vuex', 'Vue Cli', 'Selenium', 'Nightwatch', 'Twilio', 'Circle CI', 'JFrog Artifactory', 'Karma', 'Google Cloud Platform', 'GCP cloud functions'],
        },
        {
          title: 'General',
          list: ['Mac & PC', 'Adobe CC Suite: Photoshop, Illustrator, After Effects, XD', 'Microsoft Office'],
        }
      ],
      workExperience: [
        {
          company: 'Infusionsoft',
          title: 'Software Engineer I',
          start: 'May 2017',
          finish: 'Present',
          tasks: [
            'Fullstack software engineer for SaaS products',
            'Vue JS, React Native, Java, Node, Polymer, CSS & Sass',
            'Continuous integration and deployment experience: Circle CI configs, Firebase deployments to test and production environments',
            'Experience with software testing: unit testing, integration testing, and end to end regression testing using Selenium & Nightwatch',
            'Agile development: sprint grooming, planning, pointing, and retrospectives',
            'Experience with Google Cloud Platform, Firebase',
          ]
        },
        {
          company: 'Performance Software',
          title: 'Engineering Intern',
          start: 'July 2016',
          finish: 'May 2016',
          tasks: [
            'Wrote python test scripts to test flight control computers for our client\'s aircraft',
            'Documented company engineering processes and created training documents',
          ]
        },
        {
          company: 'KPMG US',
          title: 'External Audit Intern',
          start: 'January 2014',
          finish: 'March 2014',
          tasks: [
            'Verified data for Fortune 500 client companies',
            'Reviewed financial data',
          ]
        },
        {
          company: 'ASML',
          title: 'Finance Intern',
          start: 'June 2012',
          finish: 'December 2013',
          tasks: [
            'Assisted with tax apportionment and general accounting work',
          ]
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@styles/main.scss';

  .container {
    display: flex;
    flex-direction: row;
    background-color: $color-lightestGray;
  }

  .content {
    flex-grow: 1;
    padding: $gp * 4;
    color: $color-darkerGray;
    overflow: auto;
  }

  h1 {
    font-weight: 500;
    border-bottom: 6px solid $color-lighterGray;
  }

  .job, .experience {
    padding-left: $gp * 2;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }

    ul {
      margin-top: $gp;
      margin-bottom: $gp * 3;
    }
  }

  .experience {
    li {
      display: inline;
    }

    li:before {
        content: '•';
    }
  }
</style>
