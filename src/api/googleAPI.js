import axios  from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    headers: {
        'x-googleapis-key': 'AIzaSyAuz5XJ7aKpE3vDCr-VJBPAF4Wxu6iC9Bw',
    }
})