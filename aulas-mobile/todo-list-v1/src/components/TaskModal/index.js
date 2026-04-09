import { useState, useEffect, use } from 'react';

export default function TaskModal({disable, onClose, onSave, taskToEdit}) {
    const [form, setForm] = useState({
        title: '', description: '', startDate: '', endDate: '', priority: 'Média'
    });
    
    useEffect(() => {    
        if (taskToEdit) setForm(taskToEdit);
        else setForm({
            title: '', description: '', startDate: '', endDate: '', priority: 'Média'
        })
    }, [taskToEdit, visible]);
    
    return ([
        <Modal visible={visible} animatio="slide">
            <View style={style.modalBody}>
                <Text style={style.label}>
                    {taskToEdit ? 'Editar Tarefa' : 'Nova Tarefa'}
                </Text>

                <TextInput style = {style.input}
                    placeholder='Título'
                    value={form.title}
                    onChangeText={v => setForm({...form, title: text})}
                />

            </View>
        </Modal>
    ])
}