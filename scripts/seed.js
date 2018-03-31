const {Resume, Seeker, Company, Position} = require('../server/db/models')
const db = require('../server/db')

const exampleSeekers = [
  { email: 'lucy@email.com', industries: 'fintech', level: 'junior' },
  { email: 'bob@email.com', industries: 'fintech', level: 'junior' },
  { email: 'tom@email.com', industries: 'adtech', level: 'junior' },
  { email: 'wale@email.com', industries: 'adtech', level: 'mid' },
  { email: 'anthony@email.com', industries: 'adtech', level: 'mid' },
  { email: 'alex@email.com', industries: 'ai', level: 'mid' },
  { email: 'preet@email.com', industries: 'ai', level: 'senior' },
  { email: 'zoom@email.com', industries: 'ai', level: 'senior' },
  { email: 'hep@email.com', industries: 'ai', level: 'senior' },
  { email: 'dima@email.com', industries: 'ai', level: 'manager' },
  { email: 'brendan@email.com', industries: 'fintech', level: 'manager' },
];

const seekers = exampleSeekers.map(seeker => {
  seeker.password = `${seeker.name}99`;
  return seeker;
})

const exampleCompanies = [
  { name: 'JPMorgan', industry: 'fintech', size: '10000' },
  { name: 'Bloob', industry: 'fintech', size: '10000' },
  { name: 'Xorp', industry: 'ai', size: '10000' },
  { name: 'Email', industry: 'ai', size: '10000' },
  { name: 'CupCo', industry: 'ai', size: '10000' },
  { name: 'Plow', industry: 'adtech', size: '10000' },
  { name: 'Apple', industry: 'adtech', size: '10000' },
  { name: 'Hemp', industry: 'adtech', size: '10000' },
  { name: 'Zang', industry: 'fintech', size: '10000' },
  { name: 'Klort', industry: 'fintech', size: '10000' }
]

const companies = exampleCompanies.map(company => {
  company.email = `${company.name}@email.com`;
  company.password = `${company.name}99`;
  return company;
})

const positions = [
  { title: 'Frontend Engineer', level: 'junior', description: 'a job where you do things', companyId: 1},
  { title: 'Frontend Engineer', level: 'junior', description: 'a job where you do things', companyId: 1},
  { title: 'Frontend Engineer', level: 'junior', description: 'a job where you do things', companyId: 2},
  { title: 'Frontend Engineer', level: 'mid', description: 'a job where you do things', companyId: 2},
  { title: 'Frontend Engineer', level: 'mid', description: 'a job where you do things', companyId: 2},
  { title: 'Frontend Engineer', level: 'mid', description: 'a job where you do things', companyId: 3},
  { title: 'Frontend Engineer', level: 'mid', description: 'a job where you do things', companyId: 3},
  { title: 'Frontend Engineer', level: 'senior', description: 'a job where you do things', companyId: 3},
  { title: 'Frontend Engineer', level: 'senior', description: 'a job where you do things', companyId: 3},
  { title: 'Frontend Engineer', level: 'manager', description: 'a job where you do things', companyId: 4},
]

const resumes = [
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 1 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 2 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 3 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 4 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 5 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 6 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 7 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 8 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 9 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 10 },
  { experience: 'I have done things and had jobs', skills: 'javascript', education: 'fullstack academy of code', seekedId: 11 }
]

const seed = () =>
Promise.all(seekers.map(seeker => Seeker.create(seeker)))
.then( Ps => {
  console.log(`Seeded ${Ps.length} seekers`)
  return Promise.all(companies.map(company => Company.create(company)))
})
.then( Ps => {
  console.log(`Seeded ${Ps.length} companies`)
  return Promise.all(resumes.map(resume => Resume.create(resume)))
})
.then( Ps => {
  console.log(`Seeded ${Ps.length} resumes`)
  return Promise.all(positions.map(position => Position.create(position)))
})
.then(Ps => console.log(`Seeded ${Ps.length} positions`))

const main = () => {
  console.log('Syncing db...');

  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      console.log('Seeding complete');
      return null;
    });
};

main();
