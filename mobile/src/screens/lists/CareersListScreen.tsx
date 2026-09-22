import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Card from '../../components/Card'
import IconBadge from '../../components/IconBadge'
import { careers } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'CareersList'>

export default function CareersListScreen({ navigation }: Props) {
  return (
    <FlatList
      style={{ backgroundColor: colors.bgSoft }}
      contentContainerStyle={styles.list}
      data={careers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('CareerDetail', { id: item.id })}>
          <Card style={styles.row}>
            <IconBadge icon={item.icon} color={colors.primaryDeep} />
            <View style={styles.body}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.salary}>{item.salaryRange}</Text>
            </View>
            <View style={styles.matchWrap}>
              <Text style={styles.matchPct}>{item.matchPct}%</Text>
              <Text style={styles.matchLabel}>match</Text>
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
  body: { flex: 1, gap: 4 },
  title: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  salary: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted },
  matchWrap: { alignItems: 'center' },
  matchPct: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.accent },
  matchLabel: { fontFamily: fonts.body, fontSize: 10, color: colors.muted },
})
