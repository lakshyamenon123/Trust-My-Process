import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Card from '../../components/Card'
import IconBadge from '../../components/IconBadge'
import LevelBar from '../../components/LevelBar'
import { skills } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'SkillsList'>

export default function SkillsListScreen({ navigation }: Props) {
  return (
    <FlatList
      style={{ backgroundColor: colors.bgSoft }}
      contentContainerStyle={styles.list}
      data={skills}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('SkillDetail', { id: item.id })}>
          <Card style={styles.row}>
            <IconBadge icon={item.icon} color={colors.highlight} />
            <View style={styles.body}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.chip}>
                  <Text style={styles.chipText}>{item.category}</Text>
                </View>
              </View>
              <LevelBar value={item.level} color={colors.highlight} />
            </View>
            <ChevronRight size={20} color={colors.muted} />
          </Card>
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  body: { flex: 1, gap: 6 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  chip: { backgroundColor: colors.bgSoft, borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3 },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 10.5, color: colors.muted },
})
