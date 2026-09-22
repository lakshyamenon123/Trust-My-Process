import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native'
import { ChevronRight, TrendingUp } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Card from '../../components/Card'
import IconBadge from '../../components/IconBadge'
import LevelBar from '../../components/LevelBar'
import { strengths } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'StrengthsList'>

export default function StrengthsListScreen({ navigation }: Props) {
  return (
    <FlatList
      style={{ backgroundColor: colors.bgSoft }}
      contentContainerStyle={styles.list}
      data={strengths}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('StrengthDetail', { id: item.id })}>
          <Card style={styles.row}>
            <IconBadge icon={item.icon} color={colors.accent} />
            <View style={styles.body}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.subject}</Text>
                {item.trend === 'up' ? <TrendingUp size={14} color={colors.accent} /> : null}
              </View>
              <Text style={styles.summary} numberOfLines={2}>{item.description}</Text>
              <LevelBar value={item.level} color={colors.accent} />
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
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  title: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  summary: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted, lineHeight: 17 },
})
