import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding-left: 10px;
  width: 80%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  z-index: 15;
`;

const StyledIcon = styled.i`
  color: #555;
  font-size: 1.3rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 10px;
`;

const StyledAutocompleteContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledAutocompleteButton = styled.button`
  width: 100%;
  padding: 10px 10px 10px 20px;
  background-color: #fff;
  font-size: 1.1rem;
  text-align: left;
  transition: 0.3s;

  :hover {
    background-color: #ccc;
  }
`;

const autocompleteData = [
  'island',
  'islands of zz',
  'islands',
  'islands of coast of krabi',
  'islands of greece',
  'islands of z',
  'islands of thailand',
  'islands of zzz',
  'another keyword',
  'another keyword1',
  'another keyword2',
  'another keyword3',
];

const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [submittedTerm, setSubmittedTerm] = useState<string>('');
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
    setSearchTerm('');
  };

  const handleAutocompleteSubmit = (keyword: string) => {
    setSubmittedTerm(keyword);
    setSearchTerm('');
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filteredAutocomplete = autocompleteData
        .filter((item) => item.includes(searchTerm))
        .sort()
        .slice(0, 5);
      setAutocompleteOptions(filteredAutocomplete);
    } else {
      setAutocompleteOptions([]);
    }
  }, [searchTerm]);

  const autocompleteElements = autocompleteOptions.map((item) => (
    <StyledAutocompleteButton
      type="button"
      key={item}
      onClick={() => handleAutocompleteSubmit(item)}
    >
      {item}
    </StyledAutocompleteButton>
  ));

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)} data-testid="search-form">
      <StyledIcon className="fas fa-search" />
      <StyledInput
        type="text"
        value={searchTerm}
        placeholder="Search high-resolution photos"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {autocompleteElements && (
        <StyledAutocompleteContainer>
          {autocompleteElements}
        </StyledAutocompleteContainer>
      )}
      {submittedTerm && (
        <Redirect to={{ pathname: '/results', state: submittedTerm }} />
      )}
    </StyledForm>
  );
};

export default SearchForm;
