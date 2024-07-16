import FirstApp from '../src/FirstApp';
import { getAllByAltText, render } from '@testing-library/react';

describe('Tests of <FirstApp />>', () => { 
    // First test.
    /*test('Match with snapshot', () => {
        const title = 'Mike';

        const { container } = render(<FirstApp 
            user={ title }
        />);

        expect(container).toMatchSnapshot();
    });*/

    // Second test.
    test('Title has to be in b', () => {
        const user = 'Mike';
        const age = 10;
        const title = `${ user } (${ age }):`;

        const { container, getByText, getByTestId } = render(<FirstApp 
            user={ user }
            age={ age }
        />);
        
        expect(getByText(title)).toBeTruthy();

        // const b = container.querySelector('b');
        // expect(b.innerHTML).toContain(text);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    // Third test.
    test('Show text sent by props', () => {
        const user = 'Mike';
        const age = 10;
        const text = 'Hello';

        const title = `${ user } (${ age }):`;

        const { getAllByText } = render(<FirstApp 
            user={ user }
            age={ age }
            text={ text }
        />);
        
        expect(getAllByText(text).length).toBe(1);
    });
});