# **Overachiever**

This web app is a SPA build with React, Taiwlind CSS and Daisy UI styled components library. I also used TypeScript here.

## **Overview**

Now this app sreves a couple of pourpouses, user can create various tasks, customize them and set the importance of each task. All of these actions are represented in the UI. Additionaly what separates this project from regular cookie cutter doto app is the statistics section where user can track their daily progress that they did by creating and compleating their tasks.

## **To Do**

- [x] Completed tasks state
- [ ] Notifications for important tasks
- [ ] About Page content
- [x] Stats Page content
- [x] Graphs and charts in Stats Page
- [ ] Daily reset for the tasks
- [ ] Add category icon
- [ ] Modal component
- [x] Add profile creation form
- [x] Create profile context

- [ ] Complete Day Feature - create button that cleares all states (start new day). Before all state is removed show popup with summary of all completed and not completed tasks.
- [ ] Segregate prop types into seperate files
- [ ] Test all components

### **Complete Day Feature Overwiev**

This functionality will be placed in the Stats section and the trigger will be button that first will ask for confirmation because this action will clear all the completed and not completed tasks.

This feature should:

- Disable the button and prevent user from clicking it if the task list is empty.
- On click it should ask first for confirmation to proceed with action or to reject it.
- Upon confirmation there should be a raport generated on how much user achieved that day (Graphs, Task amounts and personalized congratulatiuon messages).
- If this is the first day that user is doing there should be an empty comparison array but upon the first completion the state of completed day has to be pushed to the array that holds stats purely for comparison pourpouses (eg. in percentage, was it less or more than previous day that user did?).
- On each raport generation the current state od the app needs to be cleared and completed tasks needs to be moved into previous day comparison array.

## **Task Category**

- Main
- Work
- Study
- Workout
- Cooking
- Hobby
- Housekeeping

## **Tech Stack**

- React
- TypeScript
- Tailwind CSS
- Daisy UI

## **How To Use**

This project was created with the CRA method so all of the CRA scripts will work here.

**Open project on localhost**:

```npm
npm run start
```

**Create dist folder**

```npm
npm run build
```

**Run test suite**

```npm
npm run test
```

**Remove project for React enviroment**

```npm
npm run eject
```

**Create test coverage for .tsx and .ts files**

```npm
npm run coverage
```
