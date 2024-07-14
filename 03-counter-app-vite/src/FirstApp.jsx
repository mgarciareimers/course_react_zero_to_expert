import PropTypes from 'prop-types';

const sendMessage = (user, text, age) => {
    return {
        'user': user,
        'text': text,
        'age': age,
    };
}

const FirstApp = ({ user, text, age }) => {
    const newMessage = sendMessage(user, text, age);

    return (
        <>
            <b>{ newMessage.user } ({ newMessage.age }):</b>
            <p>{ newMessage.text }</p>
        </>
    );
}

FirstApp.propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

// Not mandatory.
FirstApp.defaultProps = {
    user: 'Anonymous',
    text: '',
    age: 0
}

export default FirstApp;