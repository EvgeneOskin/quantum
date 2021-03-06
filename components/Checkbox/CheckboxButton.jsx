import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonGroupLabel } from '../shared';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';
import Icon from '../Icon';
import CheckboxGroupContext from './CheckboxGroupContext';

const ID_GENERATOR = uniqId('checkbox-button-');

const HiddenCheckbox = styled(HiddenInput).attrs({
  type: 'checkbox',
})``;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const LockIcon = styled(Icon).attrs({
  name: 'lock',
})``;

const ButtonIcon = styled(Icon)`
  margin-right: 8px;
`;

const Wrapper = styled.div`
  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
    margin-right: 16px;
    vertical-align: top;

    :last-child {
      margin-right: 0;
    }
  `}

  ${LockIcon} {
    font-size: 17px;
    margin-left: 8px;
  }
`;

const CheckboxButton = ({
  children,
  id,
  label,
  value,
  checked,
  disabled,
  name,
  icon,
  error: errorProp,
  onChange: onChangeProp,
  ...props
}) => {
  const { error = errorProp, onChange = onChangeProp, inline } = useContext(
    CheckboxGroupContext,
  );

  const skin = checked ? 'primary' : 'secondary';
  const _id = id || useMemo(() => ID_GENERATOR.next().value, [name]);

  return (
    <Wrapper inline={inline}>
      <HiddenCheckbox
        {...props}
        checked={checked}
        disabled={disabled}
        error={error}
        id={_id}
        name={name}
        onChange={onChange}
        skin={skin}
        value={value}
      />
      <ButtonGroupLabel
        checked={checked}
        disabled={disabled}
        error={error}
        htmlFor={_id}
        skin={skin}
      >
        {icon && <ButtonIcon name={icon} />}
        {children || label || value}
        {disabled && <LockIcon />}
      </ButtonGroupLabel>
    </Wrapper>
  );
};

CheckboxButton.defaultProps = {
  checked: false,
  children: '',
  disabled: false,
  error: '',
  icon: undefined,
  id: '',
  label: '',
  onChange: () => {},
  value: '',
};

CheckboxButton.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
