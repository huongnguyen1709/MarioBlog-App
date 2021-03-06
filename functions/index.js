const functions = require('firebase-functions');
const admin = require('firebase-admin') // to connect to firestore, need admin
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {

        const project = doc.data()
        console.log(project.authorId)
        const notification = {
            content: 'added a new blog',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            userId: project.authorId,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)

    })


exports.userJoined = functions.auth.user()
    .onCreate(user => {

        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data()
                const notification = {
                    content: 'joined the party',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    userId: user.uid,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification)

            })
    })

exports.projectDeleted = functions.firestore
    .document('projects/{projectId}')
    .onDelete(doc => {

        const project = doc.data()
        console.log(project.authorId)
        const notification = {
            content: `deleted the blog '${project.title}'`,
            user: `${project.authorFirstName} ${project.authorLastName}`,
            userId: project.authorId,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)

    })

exports.projectUpdated = functions.firestore
    .document('projects/{projectId}')
    .onUpdate(change => {

        const newValue = change.after.data();
        const notification = {
            content: `edited the blog '${newValue.title}'`,
            user: `${newValue.authorFirstName} ${newValue.authorLastName}`,
            userId: newValue.authorId,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)

    })