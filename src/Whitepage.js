import Section from './Section';
import Menu from './Menu';
import './Whitepage.css';

function WhitePage() {
  return (
    <div className="wrapper shadow bg-white">
      <Menu />
      <Section title="Home"></Section>
      <Section title="About"></Section>
      <Section title="Resume"></Section>
      <Section title="Projects"></Section>
      <Section title="Art"></Section>
      <Section title="Contact"></Section>
    </div>
  );
}

export default WhitePage;
