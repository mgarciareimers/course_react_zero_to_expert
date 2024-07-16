import FirstApp from '../src/FirstApp';
import { getAllByAltText, render, screen } from '@testing-library/react';

describe('Tests of <FirstApp />>', () => { 
    const user = 'Mike';
    const age = 10;
    const title = `${ user } (${ age }):`;
    const text = 'Hello World!';

    test('Match with snapshot', () => {
        const { container } = render(
            <FirstApp 
                user={ title }
            />
        );

        expect(container).toMatchSnapshot();
    })

    // Second test.
    test('Title has to be', () => {
        render(
            <FirstApp 
                user={ user }
                age={ age }
            />
        );
        
        expect(screen.getByText(title)).toBeTruthy();
    });

    // Third test.
    test('Title has to be in b', () => {
        render(
            <FirstApp 
                user={ user }
                age={ age }
            />
        );
        
        expect(screen.getByRole('paragraph')).toBeTruthy();
    });

    // Third test.
    test('Show text sent by props', () => {
        const { getAllByText } = render(<FirstApp 
            user={ user }
            age={ age }
            text={ text }
        />);
        
        expect(screen.getAllByText(text).length).toBe(1);
    });
});