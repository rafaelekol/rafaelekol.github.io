# Workout Player

A simple web application that allows you to create custom workout routines using URL query parameters.

## How to Use

1. Open the `index.html` file in your web browser
2. To define a workout routine, add query parameters to the URL in the following format:

```
?exercise0=exerciseId:duration:durationType&exercise1=exerciseId:duration:durationType...
```

For example:
```
?exercise0=pushUps:30:seconds&exercise1=squats:15:reps&exercise2=plank:45:seconds
```

## Available Exercises

The following exercises are available in the database:

| Exercise ID | Exercise Name |
|-------------|---------------|
| pushUps     | Push-ups      |
| squats      | Squats        |
| lunges      | Lunges        |
| plank       | Plank         |
| jumpingJacks| Jumping Jacks |

## Query Parameter Format

Each exercise parameter follows this format:
```
exerciseN=exerciseId:duration:durationType
```

Where:
- `N` is the sequence number (0, 1, 2, etc.)
- `exerciseId` is the unique identifier for the exercise
- `duration` is the numeric value for how long to perform the exercise
- `durationType` can be "seconds" or "reps"

## Features

- Parse workout routines from URL query parameters
- Display exercise list with durations
- Play YouTube videos demonstrating each exercise
- Responsive design that works on mobile and desktop devices

## Technical Details

The application consists of:

- `index.html` - The main HTML file with the user interface
- `workout.js` - JavaScript file containing the exercise database and logic

The code uses:
- URLSearchParams for parsing query parameters
- YouTube embed API for displaying exercise videos
- Modern JavaScript features (classes, arrow functions, etc.)

## Examples

1. A quick cardio workout:
```
?exercise0=jumpingJacks:30:seconds&exercise1=squats:20:reps&exercise2=pushUps:10:reps
```

2. A core workout:
```
?exercise0=plank:45:seconds&exercise1=pushUps:15:reps
``` 