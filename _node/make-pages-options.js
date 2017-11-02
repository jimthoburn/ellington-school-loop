
'use strict';

exports.BASE_URL = 'http://ees-ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<!--
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
-->

<meta name="robots" content="noindex" />

<!--
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:100,300,400,700" />
<link rel="stylesheet" href="/css/shared.css" />
-->

<script type="text/template" id="azusa-home-video-template">
  <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/jGFqTpDBO90?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</script>

<link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet" />
<link rel="stylesheet" href="/custom-code/assets/shared.css" />
<link rel="stylesheet" href="/custom-code/assets/custom.css">

<script src="/custom-code/assets/shared.js"></script>
`;

/*
exports.LOGO_HTML = `
<a href="/">
  <img src="/images/ellington.png" width="150" alt="" />
  <h2>Ellington K-8 School</h2>
  <p>Home of the Eagles</p>
</a>
`;
*/

exports.LOGO_HTML = `
<h1>Ellington K-8 School</h1>
`;

exports.FOOTER_HTML = `
<div class="contact">
  <div>
    <h2>Ellington K-8 School</h2>
    <p>5034 North Clydebank Avenue<br />Covina, CA 91722</p>
    <p>(626) 858-6800</p>
  </div>
  <p><strong>Alexis Norman, Ed.D., Principal</strong></p>
</div>

<div class="legal">
  <h2><a href="http://azusa.org"><img src="/images/azusa-district.png" width="100" height="100" alt="Azusa Unified School District" /></a></h2>
  <p>The District prohibits, at any district school or school activity, unlawful discrimination, harassment, intimidation, and bullying of any student based on the student’s actual race, color, ancestry, national origin, ethnic group, identication, age, religion, marital or parental status, physical or mental disability, sex, sexual orientation, gender, gender identity, or gender expression; the perception of one or more of such characteristics; or association with a person or group with one or more these actual or perceived characteristics.</p>
</div>
`;

exports.SITE_MAP_URL = 'http://ees-ausd-ca.schoolloop.com/portal/site_map?d=x';

exports.SECTIONS_DATA = [{
  title: 'Main Pages',
  pages: [
    {
      url: '/',
      title: 'Home'
    }
  ]
}];

exports.REDIRECT_NAV_TO_FIRST_SUB_ITEM = true;
