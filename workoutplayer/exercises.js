// Exercise database - this would typically come from a backend service
const exerciseDatabase = [
    {
        uniqueId: "pushUps",
        title: "Push-ups",
        youtubeLink: "https://www.youtube.com/embed/IODxDxX7oi4",
        startSeconds: 0,
        endSeconds: 60
    },
    {
        uniqueId: "squats",
        title: "Squats",
        youtubeLink: "https://www.youtube.com/embed/42bFodPahBU",
        startSeconds: 2,
        endSeconds: 44
    },
    {
        uniqueId: "lunges",
        title: "Lunges",
        youtubeLink: "https://www.youtube.com/embed/1J8mVmtyYpk",
        startSeconds: 2,
        endSeconds: 47
    },
    {
        uniqueId: "plank",
        title: "Plank",
        youtubeLink: "https://www.youtube.com/embed/pSHjTRCQxIw",
        startSeconds: 0,
        endSeconds: 60
    },
    {
        uniqueId: "jumpingJacks",
        title: "Jumping Jacks",
        youtubeLink: "https://www.youtube.com/embed/c4DAnQ6DtF8",
        startSeconds: 3,
        endSeconds: 20
    }
];

// Export the database for use in other files
export default exerciseDatabase; 