import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../components/Dropdown';

class Controlled extends React.Component {
  static CODE = `class ControlledDropdown extends React.Component {
  constructor(props) {
    super(props);

    const { selectedItem = '' } = props;

    this.state = { selectedItem };
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Dropdown
        label="Controlled"
        placeholder="Select a district"
        selectedItem={selectedItem}
        onChange={(item) => this.setState({ selectedItem: item })}
        items={[
          { label: 'Amazonas', value: 'AM' },
          { label: 'Bahia', value: 'BA' },
          { label: 'Ceará', value: 'CE' },
          { label: 'Goiás', value: 'GO' },
          { label: 'Minas Gerais', value: 'MG' },
          { label: 'Paraná', value: 'PR' },
          { label: 'Pernambuco', value: 'PE' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Rio Grande do Sul', value: 'RS' },
          { label: 'Santa Catarina', value: 'SC' },
          { label: 'São Paulo', value: 'SP' },
        ]}
      />
    )
  }
}`;

  constructor(props) {
    super(props);

    const { selectedItem = '' } = props;

    this.state = { selectedItem };
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Dropdown
        label="Controlled"
        placeholder="Select a district"
        selectedItem={selectedItem}
        onChange={item => this.setState({ selectedItem: item })}
        items={[
          { label: 'Amazonas', value: 'AM' },
          { label: 'Bahia', value: 'BA' },
          { label: 'Ceará', value: 'CE' },
          { label: 'Goiás', value: 'GO' },
          { label: 'Minas Gerais', value: 'MG' },
          { label: 'Paraná', value: 'PR' },
          { label: 'Pernambuco', value: 'PE' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Rio Grande do Sul', value: 'RS' },
          { label: 'Santa Catarina', value: 'SC' },
          { label: 'São Paulo', value: 'SP' },
        ]}
      />
    );
  }
}

Controlled.defaultProps = {
  selectedItem: '',
};

Controlled.propTypes = {
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Simple = () => (
  <Dropdown items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']} />
);
Simple.CODE = `<Dropdown
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

const CustomLabel = () => (
  <Dropdown
    label="With a custom label"
    items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
  />
);
CustomLabel.CODE = `<Dropdown
  label="With a custom label"
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

const RequiredMark = () => (
  <Dropdown
    required
    label="With a required mark"
    items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
  />
);
RequiredMark.CODE = `<Dropdown
  required
  label="With a required mark"
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

const WithError = () => (
  <Dropdown
    error="Don't worry, this is just a message error example ;)"
    label="With an error"
    items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
  />
);
WithError.CODE = `<Dropdown
  error="Don't worry, this is just a message error example ;)"
  label="With an error"
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

const Disabled = () => (
  <Dropdown
    disabled
    placeholder="What fruit do you prefer?"
    label="Disabled, with a custom placeholder"
    items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
  />
);
Disabled.CODE = `<Dropdown
  disabled
  placeholder="What fruit do you prefer?"
  label="Disabled, with a custom placeholder"
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

const AutoComplete = () => (
  <Dropdown
    autocomplete
    label="Autocomplete"
    placeholder="Start typing..."
    items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
  />
);
AutoComplete.CODE = `<Dropdown
  autocomplete
  label="Autocomplete"
  placeholder="Start typing..."
  items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
/>`;

export {
  Simple,
  CustomLabel,
  RequiredMark,
  WithError,
  Disabled,
  Controlled,
  AutoComplete,
};
