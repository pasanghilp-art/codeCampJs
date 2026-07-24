const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp){
  const now = Date.now();
  const past = new Date(timestamp).getTime();
  const diffMs= now - past;

  const diffMinutes= Math.floor(diffMs/1000/60);
  const diffHours= Math.floor(diffMinutes/60);
  const diffDays = Math.floor(diffHours/24);

  if(diffMinutes<60){
    return `${diffMinutes}m ago`;
  } else if (diffHours<24){
    return `${diffHours}h ago`;
  } else {
    return `${diffDays}d ago`
  }
}

function viewCount(viewNum){
  if(viewNum < 1000){
    return viewNum;
  } else {
    return `${Math.floor(viewNum/1000)}k`;
  }
}