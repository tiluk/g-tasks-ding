# g-tasks-ding 🛎️
Chrome Extension to play a satisfying _ding_ sound, when ticking a task in google tasks

## Supported Languages

- English (US)
- German (DE)

### Add your language

If you want to add your language, please follow these steps:

1. Find out the language code of your language (e.g. `de` for German)
2. Find out the aria-label of the task button in your language (e.g. `Erledigt` for German)
3. Add a new entry to the switch-case in `content.js` like this:
```javascript
case 'de':
    return 'Erledigt';
```
4. Create a new pull request with your changes