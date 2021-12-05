import { firestore } from 'services/firebase'
import {
  doc,
  updateDoc,
  collection,
  setDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore'
import emailjs, { init } from 'emailjs-com'

init('user_rUnZ881JmQk3UfzTSgUW6')

const useCreateRequiredAction = () => {
  const createRequiredAction = async ({ values, recordId, id }) => {
    values.attendeesMinYear = values.attendeesMinYear
      ? values.attendeesMinYear._d
      : undefined

    Object.keys(values).forEach((key) =>
      values[key] === undefined ? delete values[key] : {}
    )
    values.attendees = []
    let queries = []

    values.attendeesMinYear &&
      queries.push(where('birthDate', '<=', values.attendeesMinYear))
    values.attendeesRole &&
      queries.push(where('role', '==', values.attendeesRole))
    values.attendeesGender &&
      queries.push(where('gender', '==', values.attendeesGender))

    const ref = collection(firestore, 'users')
    const q = queries.length > 0 ? query(ref, ...queries) : query(ref)
    const attendees = await getDocs(q)

    attendees.forEach((doc) => {
      const user = doc.data()
      values.attendees.push(user.id)
      if (user.email) {
        console.log('email user ->', user)
        emailjs.send('service_qmmry3b', 'template_fhx71od', {
          title: values.title,
          description: values.description
        })
        // emailjs
        //   .sendForm(
        //     'service_qmmry3b',
        //     'template_fhx71od',
        //     form,
        //     'user_rUnZ881JmQk3UfzTSgUW6'
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text)
        //     },
        //     (error) => {
        //       console.log(error.text)
        //     }
        //   )
      }
    })

    id
      ? updateDoc(doc(firestore, 'required-actions', recordId), {
          ...values,
          id: recordId
        })
      : setDoc(doc(firestore, 'required-actions', recordId), {
          ...values,
          id: recordId
        })
  }

  return createRequiredAction
}
export default useCreateRequiredAction
