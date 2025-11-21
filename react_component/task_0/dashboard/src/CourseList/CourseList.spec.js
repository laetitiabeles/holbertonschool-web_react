import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('Render without crashing', () => {
    render(<CourseList />);
  });

  test('Render 5 different rows when it receives an array of 3 courses', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const { container } = render(<CourseList courses={courses} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(5); // 2 header rows and 3 course rows
  });

  test('Render correctly when courses is empty', () => {
    const { container } = render(<CourseList courses={[]} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(3); // 2 header rows and 1 "No course available yet" row
    expect(container.textContent).toContain('No course available yet');
  });
});
