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

      <section v-if="false">
        <h1>Experience</h1>
        <div class="section-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, libero perferendis mollitia molestias tenetur, quas labore asperiores fuga pariatur aut aspernatur blanditiis atque, laudantium facere. Omnis tenetur nesciunt temporibus nihil?
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
      workExperience: [
        {
          company: 'Infusionsoft',
          title: 'Software Engineer I',
          start: 'May 2017',
          finish: 'Present',
          tasks: [
            'Fullstack with emphasis on front-end',
            'Created feature-based component library from scratch, with full CICD integration and unit testing',
            'Agile (scrum) experience; participated in sprint grooming, planning, and retrospectives',
            'Update backend API\'s to reconcile deleted Salesforce data',
            'Firebase deployments to sand and production environments',
            'API integration with Twilio',
            'Experience with Google Cloud Platform',
            'Set up Circle CI 2.0 configs for front-end repos',
            'Participated in planning and pointing of user stories, and utilizing user feedback to implement changes'
          ]
        },
        {
          company: 'Performance Software',
          title: 'Engineering Intern',
          start: 'July 2016',
          finish: 'May 2016',
          tasks: [
            'Writing python test scripts to test flight control computers for client aircraft',
            'Created training documents',
            'Documented company engineering processes',
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

  .job {
    padding-left: $gp * 2;

    .title {
      font-weight: lighter;
      font-size: 1.25em;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
