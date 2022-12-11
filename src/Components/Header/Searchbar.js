import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'new-york', label: 'Иссык-Куль' },
  { value: 'las-vegas', label: 'Чуй' },
  { value: 'rome', label: 'Талас' },
  { value: 'paris', label: 'Баткен' },
  { value: 'london', label: 'Нарын' },
  { value: 'dubai', label: 'Джалал-Абад' },
  { value: 'barcelona', label: 'Ош' },
  // { value: 'madrid', label: 'Madrid' },
  // { value: 'singapore', label: 'Singapore' },
  // { value: 'venice', label: 'Venice' },
  // { value: 'milan', label: 'Milan' },
  // { value: 'naples', label: 'Naples' },
  // { value: 'budapest', label: 'Budapest' },
  // { value: 'edinburg', label: 'Edinburg' },
  // { value: 'florence', label: 'Florence' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Выберите Область"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large" />
        <button id="go">ок</button>
      </div>
    );
  }
}

export default Searchbar;
