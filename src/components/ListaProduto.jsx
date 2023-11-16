import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

const ListaProduto = () => {

  let [nome, setNome] = useState('')
  let [email, setEmail] = useState('')

  const exibirDados = _=>{
    console.warn({nome, email})
  }

  return (
    <View>
        <TextInput
        style={{borderBottomWidth: 2.0}}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={nome => setNome(nome)}

        />

        <TextInput
        style={{borderBottomWidth: 2.0}}
        placeholder='Digite seu e-mail'
        value={email}
        onChangeText={email => setEmail(email)}

        />
      
      <Button
        title='Me Mostre'
        onPress={exibirDados}
      
      />

    </View>
    
  )
}

export default ListaProduto
