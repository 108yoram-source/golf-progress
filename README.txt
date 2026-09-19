Golf Progress — GPS edition

This version adds per-shot GPS distance measurement during a round.

How to use:
1. Open the app on the phone over HTTPS (or localhost during development).
2. Allow Location permission.
3. In a hole, stand at the first ball and press "📍 התחל GPS".
4. Hit the shot.
5. When you reach the ball, choose the club used for that shot and press "📍 הכדור כאן".
6. The app stores the GPS points and calculates the shot distance automatically.
7. Repeat for every shot. "↶ בטל" removes the last recorded GPS shot.

The app stores data in localStorage and includes GPS shot data in the existing JSON backup.

Important:
- Phone GPS accuracy varies. Each position uses high-accuracy mode and collects several readings before choosing the best reported accuracy.
- GPS is not survey-grade; short shots may have larger relative error.
- Browser location permission and HTTPS are required on most phones.
