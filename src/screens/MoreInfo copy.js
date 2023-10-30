import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Canvas from 'react-native-canvas';
import axios from 'axios';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalColor, setModalColor] = useState('green');
  const drawing = useRef(false);
  const canvasRef = useRef(null);

  const draw = (canvas, x, y, isTouch) => {
    console.log('Drawing at:', x, y);
    if (!drawing.current) return;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#f3f3';

    const offsetX = isTouch ? canvas.offsetLeft : 0;
    const offsetY = isTouch ? canvas.offsetTop : 0;
    const actualX = x - offsetX;
    const actualY = y - offsetY;

    ctx.lineTo(actualX, actualY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(actualX, actualY);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    drawing.current = true;
    draw(canvasRef.current, e.nativeEvent.touches[0].pageX, e.nativeEvent.touches[0].pageY, true);
  };

  const handleTouchEnd = () => {
    drawing.current = false;
    canvasRef.current.getContext('2d').beginPath();
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    draw(canvasRef.current, e.nativeEvent.touches[0].pageX, e.nativeEvent.touches[0].pageY, true);
  };

  const handleMouseDown = (e) => {
    drawing.current = true;
    draw(canvasRef.current, e.nativeEvent.pageX, e.nativeEvent.pageY, false);
  };

  const handleMouseUp = () => {
    drawing.current = false;
    canvasRef.current.getContext('2d').beginPath();
  };

  const handleMouseMove = (e) => {
    draw(canvasRef.current, e.nativeEvent.pageX, e.nativeEvent.pageY, false);
  };

  const saveDrawing = async () => {
    if (canvasRef.current) {
      const data = canvasRef.current.toDataURL('image/png');
      const character = 'YourCharacter'; // Replace with your character data

      try {
        const response = await axios.post('YOUR_API_ENDPOINT', { data, character });
        if (response.data.success) {
          setModalMessage('Successfully written character!');
          setModalColor('green');
          setModalVisible(true);
        } else {
          setModalMessage('Failed to write character!');
          setModalColor('red');
          setModalVisible(true);
        }
      } catch (error) {
        console.error('Error saving drawing:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Canvas
        ref={canvasRef}
        style={styles.canvas}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveDrawing}>
        <Text style={styles.saveButtonText}>Save Drawing</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalMessage, { color: modalColor }]}>{modalMessage}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    backgroundColor: 'white',
    flex: 1,
    width:300,
    height:600
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeModalText: {
    fontSize: 16,
    color: 'blue',
  },
});
