import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resume = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AYESHA SAEED</Text>
      <Text style={styles.subHeading}>SOFTWARE Developer</Text>

      <Text style={styles.sectionHeading}>Skills</Text>
      <Text style={styles.skills}>- React Native</Text>
      <Text style={styles.skills}>- JavaScript</Text>
      <Text style={styles.skills}>- HTML/CSS</Text>
      <Text style={styles.skills}>- FLUTTER</Text>
      <Text style={styles.skills}>- PYTHON</Text>

      <Text style={styles.sectionHeading}>Experience</Text>
      

      <Text style={styles.company}>EZI TECHNOLOGY COMPANY</Text>
      <Text style={styles.position}>Mobile App Developer</Text>
      <Text style={styles.date}>JUNE 2023 - Present</Text>
      <Text style={styles.description}>
        - Developed mobile applications using React Native.
      </Text>
      <Text style={styles.description}>
        - Collaborated with a team of designers and developers to create user-friendly interfaces and implement new features.
      </Text>

      <Text style={styles.sectionHeading}>Education</Text>
      
      <Text style={styles.university}>Abasyn University</Text>
      <Text style={styles.degree}>Bachelor of SOFTWARE ENGENEERING</Text>
      <Text style={styles.date}>2020 to 2024</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  skills: {
    fontSize: 16,
    marginBottom: 5,
  },
  company: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  university: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  degree: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Resume;