import { notification } from 'antd'

const useHandleError = () => {
  const handleError = (err) => {
    console.log('err <-----------')
    notification.error({
      message: 'Something went wrong',
      description: err.message
    })
  }

  return handleError
}

export default useHandleError
