import React from "react";

import styled from "styled-components/native";

import { AdditionalInfoProps } from "./types";

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ releaseDate, rating, genres }) => (
  <InfoContainer>
    <InfoTitle>Additional Information</InfoTitle>
    <InfoText>
      <Label>Release Date:</Label> {releaseDate}
    </InfoText>
    <InfoText>
      <Label>Rating:</Label> {rating} / 10
    </InfoText>
    <InfoText>
      <Label>Genres:</Label> {genres.join(", ")}
    </InfoText>
  </InfoContainer>
);

const InfoContainer = styled.View`
  margin-top: ${(props) => props.theme.margins.extraLarge || 20}px;
  padding: ${(props) => props.theme.spacing.medium || 10}px;;
  border-top-color: ${(props) => props.theme.colors.gray};
  border-top-width: 1px;
`;

const InfoTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large || 15}px;
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacing.medium || 10}px;
`;

const InfoText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
  margin-bottom: ${(props) => props.theme.spacing.small || 5}px;
`;

const Label = styled.Text`
  font-weight: bold;
`;

export default AdditionalInfo;
